app.get(/^\/ibnayaz789_gmail_com\/?$/, (req, res) => {
  res.set("Content-Type", "text/plain");

  const x = Number(req.query.x);
  const y = Number(req.query.y);

  if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
    return res.send("NaN");
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const result = (x * y) / gcd(x, y);

  res.send(String(result));
});
