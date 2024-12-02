import { deleteProjectComment } from "@/app/actions/projects";
import Loading from "@/components/Loading/Loading";
import { useTransition } from "react";

export default function DeleteCommentButton({
  commentId,
  projectId,
}: {
  commentId: string;
  projectId: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="w-full h-full flex items-center">
      <button
        className=" h-full w-full flex items-center justify-center pt-[25px]"
        value={commentId}
        onClick={async () => {
          startTransition(async () => {
            await deleteProjectComment(projectId, commentId);
          });
        }}
      >
        Delete
      </button>

      {isPending && <Loading message="Deleting comment..." />}
    </div>
  );
}
