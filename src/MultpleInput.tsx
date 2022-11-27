import { Slider } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

export const MultipleInput: React.FC<{
  control: Control<FieldValues, number>;
  value: any; // FIXME
  onChange: (event: Event, newTalkTime: number | number[]) => void;
}> = ({ control, value, onChange }) => {
  return (
    <>
      <div className="flex items-center">
        <Controller
          name="min"
          control={control}
          render={({ field }) => {
            return <input type="number" {...field} />;
          }}
        />
        <span>分</span>
      </div>

      <Slider
        className="mx-4 px-3 max-w-md"
        min={0}
        max={90}
        value={value}
        onChange={onChange}
      />

      <div className="flex">
        <Controller
          name="max"
          control={control}
          render={({ field }) => {
            return <input type="number" {...field} />;
          }}
        />
        <span className="inline-block">{value[1] === 90 ? "分+" : "分"}</span>
      </div>
    </>
  );
};
