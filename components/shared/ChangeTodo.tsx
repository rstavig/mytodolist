
import { todoStatus } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import { Button } from "@/components/ui/button";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/types/todoTypes";
import { Check } from "lucide-react";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button
        type="submit"
      ><Check /></Button>
    </Form>
  );
};

export default ChangeTodo;
