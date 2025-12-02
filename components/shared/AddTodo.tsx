import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { Button } from "@/components/ui/button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Add Todo..."
        />
       <Button type="button" variant="default" className="ml-3">Add Todo</Button>
      </div>
    </Form>
  );
};

export default AddTodo;