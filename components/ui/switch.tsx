import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { IconLeaf, IconMeat } from "@tabler/icons-react"; // Import icons
import { Snippet } from "@nextui-org/snippet";

export const Switch = ({
  checked,
  setChecked,
  key,
  isNonVeg,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  key: string;
  isNonVeg: boolean;
}) => {
  return (
    <Snippet className="p-[12px]" hideCopyButton hideSymbol variant="bordered">
      <form className="flex space-x-4 antialiased items-center">
        <label
          htmlFor={key}
          className={twMerge(
            "h-[8px] flex items-center rounded-full w-[50px] relative cursor-pointer transition duration-200",
            checked
              ? isNonVeg
                ? "bg-red-500"
                : "bg-green-500"
              : "bg-neutral-200 border-neutral-200"
          )}
        >
          <motion.div
            initial={{
              width: "20px",
              x: checked ? 0 : 32,
            }}
            animate={{
              height: ["20px", "10px", "20px"],
              width: ["20px", "30px", "20px", "20px"],
              x: checked ? 32 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            key={String(checked)}
            className={twMerge(
              "h-[30px] p-[0px] block rounded-full z-10 flex items-center justify-center"
            )}
          >
            {isNonVeg ? (
              <img
                className="bg-neutral"
                src="nonVeg.png"
                alt="veg-icon"
                height={20}
                width={20}
              />
            ) : (
              <img
                className="bg-neutral"
                src="veg.png"
                alt="veg-icon"
                height={20}
                width={20}
              />
            )}
          </motion.div>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="hidden"
            id={key}
          />
        </label>
      </form>
    </Snippet>
  );
};
