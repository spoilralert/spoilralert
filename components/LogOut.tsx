import { clearStorage } from "../lib/storage";

export default function LogOut() {
  clearStorage();
  location.href = "/";
}
