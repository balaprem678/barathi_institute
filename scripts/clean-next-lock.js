const { rmSync, existsSync } = require("fs");
const { join } = require("path");

const devPath = join(process.cwd(), ".next", "dev");
const lockPath = join(devPath, "lock");

try {
  if (existsSync(lockPath)) {
    rmSync(lockPath, { force: true });
    console.log("Removed stale Next.js dev lock:", lockPath);
  }
  if (existsSync(devPath) && !existsSync(lockPath)) {
    // Remove stale dev artifacts only if the lock was present; Next.js will recreate this directory.
    rmSync(devPath, { recursive: true, force: true });
    console.log("Removed stale Next.js dev directory:", devPath);
  }
  process.exit(0);
} catch (error) {
  console.error("Failed to clean stale Next.js dev state:", error.message);
  process.exit(1);
}
