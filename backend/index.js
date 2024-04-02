const express = require("express");
const fs = require("fs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dataPath = "./data.json";
const app = express();

app.use(express.json());

// Enable CORS
app.use(cors());

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
}

// Read data from JSON file
function readData() {
  const jsonData = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(jsonData);
}

// Write data to JSON file
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// User signup endpoint
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input fields
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required" });
  }

  try {
    const data = readData();

    // Check if email already exists
    const existingUser = data.users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object with a unique ID
    const newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
    };

    // Add the new user to the users array
    data.users.push(newUser);

    // Write updated data to file
    writeData(data);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User login endpoint
// User login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const data = readData();

    // Find user by email
    const user = data.users.find((user) => user.email === email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email!" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password!" });
    }

    // Generate JWT token with user details
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      "secretKey",
      { expiresIn: "1h" },
    );

    // Return the token in the response along with user details
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all data route
app.get("/data", (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Order endpoint (requires authentication)
app.post("/order", verifyToken, (req, res) => {
  const { items, city, state, address, pincode } = req.body;
  const { id, name, email } = req.user;

  try {
    const data = readData();

    // Create new order object
    const newOrder = {
      orderId: data.orders.length + 1,
      userId: id,
      name,
      email,
      city,
      state,
      address,
      pincode, // Include the pincode in the new order object
      items,
      orderDate: new Date().toISOString(),
    };

    // Add the new order to orders array
    data.orders.push(newOrder);

    // Write updated data to file
    writeData(data);

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
