import * as React from "react";
import { Text } from "@react-email/components";

const Logo = ({ mode = "dark" }: { mode?: "light" | "dark" }) => (
  <Text
    className={`font-bold text-center text-4xl ${
      mode === "light" ? "text-white" : "text-[#256940]"
    }`}
    style={{
      fontFamily: "'Dancing Script', cursive",
    }}
  >
    Greenland
  </Text>
);

export default Logo;
