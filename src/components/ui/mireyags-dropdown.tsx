import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type MireyagsDropdownType = {
  id: number;
  name: string;
  value: string; // ✅ only string allowed
};

const MireyagsDropdown = ({
  list,
  selectedValue,
  onValueChange,
  placeholderText,
}: {
  list: MireyagsDropdownType[];
  selectedValue: string | undefined; // ✅ only string
  onValueChange: (value: string) => void; // ✅ only string
  placeholderText?: string;
}) => {
  return (
    <Select
      value={
        selectedValue !== "" && selectedValue !== undefined
          ? selectedValue
          : undefined
      }
      onValueChange={(val: string) => {
        onValueChange(val); // ✅ no number conversion
      }}
    >
      <SelectTrigger className="h-[50px] w-full rounded-xl border border-white/30 bg-white px-4 text-black shadow-none outline-none data-[placeholder]:text-black/45 focus:ring-2 focus:ring-white/40">
        <SelectValue
          className="text-left text-base font-medium text-black data-[placeholder]:font-normal data-[placeholder]:text-black/45"
          placeholder={placeholderText ?? "Select"}
        />
      </SelectTrigger>

      <SelectContent className="mt-1 h-auto max-h-[250px] w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] rounded-xl border border-black/15 bg-white p-1 text-black shadow-xl">
        <SelectGroup>
          {list
            .filter((item) => item.value !== "")
            .map((item) => (
              <SelectItem
                key={item.id}
                value={item.value} // ✅ already string
                className="cursor-pointer rounded-lg px-3 py-2 text-base font-normal leading-normal text-black focus:bg-black focus:text-white data-[highlighted]:bg-black data-[highlighted]:text-white"
              >
                {item.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default MireyagsDropdown;
