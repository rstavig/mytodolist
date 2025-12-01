"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
// import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { todoType } from "@/types/todoTypes";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
      >Edit</Button>

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={todo.id}
            type="hidden"
          />
          <div className="flex justify-center">
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
            />

            <Button type="submit" variant="default" className="ml-3">Save</Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo