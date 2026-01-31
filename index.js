const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// GCD using Euclidean algorithm
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// LCM calculation
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Replace this with your email (underscores only)
app.get("/ibnayaz789_gmail_com", (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);

  // Check for natural numbers
  if (
    !Number.isInteger(x) ||
    !Number.isInteger(y) ||
    x <= 0 ||
    y <= 0
  ) {
    res.send("NaN");
    return;
  }

  res.send(String(lcm(x, y)));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
