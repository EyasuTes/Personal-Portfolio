import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "172.16.0.112", // Replace 'YOUR_LOCAL_IP_ADDRESS' with your computer's local IP address
//     port: 5173, // Ensure it matches the port you are using
//   },
// });
export default defineConfig({
  plugins: [react()],
});
