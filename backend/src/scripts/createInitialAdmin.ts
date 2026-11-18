import "dotenv/config";
import { prisma } from "../lib/prisma";
import { hashPassword } from "../auth/password";

async function main() {
  const username = process.env.INIT_ADMIN_USERNAME;
  const email = process.env.INIT_ADMIN_EMAIL;
  const password = process.env.INIT_ADMIN_PASSWORD;

  if (!username || !email || !password || password.length < 12) {
    throw new Error("Missing or invalid initial admin credentials.");
  }

  const adminCount = await prisma.admin.count();

  if (adminCount > 0) {
    console.log("An administrator already exists. No changes made.");
    return;
  }

  await prisma.app_User.create({
    data: {
      name: "Administrator",
      username,
      email,
      password: await hashPassword(password),
      admin: {
        create: {},
      },
    },
  });

  console.log("Initial administrator created successfully.");
}

main()
  .catch(() => {
    console.error("Failed to create initial administrator.");
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
