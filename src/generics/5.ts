// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Role = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Role = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
