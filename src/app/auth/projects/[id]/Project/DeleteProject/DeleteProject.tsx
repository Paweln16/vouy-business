import { deleteProject } from "@/app/actions/projects";
import Loading from "@/components/Loading/Loading";
import { useTransition } from "react";

export default function DeleteProject({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const submitDeleteAction = () => {
    startTransition(async () => {
      console.log(id);
      await deleteProject(id);
    });
  };

  return (
    <div className="h-full w-[50%] flex items-center justify-center">
      <form action={submitDeleteAction}>
        <button className="text-red-600">Delete</button>
      </form>

      {isPending && <Loading message="Deleting project..." />}
    </div>
  );
}
