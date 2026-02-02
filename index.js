const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// GCD for BigInt
function gcd(a, b) {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

app.get(/^\/ibnayaz789_gmail_com\/?$/, (req, res) => {
  res.set("Content-Type", "text/plain");

  try {
    const x = BigInt(req.query.x);
    const y = BigInt(req.query.y);

    // natural numbers only
    if (x <= 0n || y <= 0n) {
      return res.send("NaN");
    }

    const result = (x * y) / gcd(x, y);

    // BigInt → string (digits only)
    res.send(result.toString());
  } catch (e) {
    // covers missing params, floats, non-numbers
    res.send("NaN");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
