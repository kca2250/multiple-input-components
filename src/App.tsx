import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { MultipleInput } from "./MultpleInput";

function App() {
  const [talkTime, setTalkTime] = useState<number[]>([0, 90]);

  const { control, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: {
      min: 0,
      max: 90,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleChangeRangeValue = (
    event: Event,
    newTalkTime: number | number[]
  ) => {
    event.preventDefault();
    setTalkTime(newTalkTime as number[]);
    setValue("min", talkTime[0]);
    setValue("max", talkTime[1]);
  };

  return (
    <form onSubmit={onSubmit}>
      <MultipleInput
        control={control}
        value={talkTime}
        onChange={handleChangeRangeValue}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default App;
