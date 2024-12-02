"use client";
import { createProjectComment } from "@/app/actions/projects";
import { CommentType } from "@/types/projects";
import Link from "next/link";
import { useActionState } from "react";
import DeleteCommentButton from "../DeleteCommentButton/DeleteCommentButton";
import Loading from "@/components/Loading/Loading";
import { UserType } from "@/types/users";

export default function Comments({
  comments,
  users,
  projectId,
  userId,
}: {
  comments: CommentType[];
  projectId: string;
  userId: string;
  users: UserType[];
}) {
  const initialState = {
    errors: {
      title: [],
      tag: [],
    },
  };

  const [state, createCommentAction, isPending] = useActionState(
    createProjectComment,
    initialState
  );

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-[20%] bg-[#fbfbfb] flex items-center justify-center">
        <div className="w-[60%] flex flex-col items-center gap-[10px]">
          <div className="flex gap-[10px] items-center justify-start w-full">
            <span className="h-[10px] w-[10px] rounded-[20px] bg-[#2d2d2d]"></span>
            <Link
              href={`/auth/projects/${projectId}`}
              className="text-[20px] text-[#2d2d2d]"
            >
              General info
            </Link>
          </div>
          <div className="flex gap-[10px] items-center justify-start w-full">
            <span className="h-[10px] w-[10px] bg-[#a2a2a2] rounded-[20px]"></span>
            <Link
              href={`/auth/projects/${projectId}/comments`}
              className="text-[20px] text-[#a2a2a2]"
            >
              Comments
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-[80%] bg-white p-[30px]">
        <div className="h-full w-[50%] flex flex-col gap-[10px]">
          <span className="text-[25px]">Comments</span>
          <div className="max-h-[50%] w-full flex flex-col gap-[20px] overflow-y-scroll">
            {comments.map((comment: CommentType) => {
              return (
                <div
                  key={comment.id}
                  className="flex gap-[20px]  h-[75px] w-full items-center"
                >
                  <div className="h-full w-[65%] flex flex-col gap-[10px]">
                    <span>Comment</span>
                    <p className="h-full flex items-center pl-[10px] w-full border-[1px] rounded-[10px]  outline-none">
                      {comment.title}
                    </p>
                  </div>
                  <div className="flex flex-col w-[25%] h-full gap-[10px]">
                    <span>Tag</span>
                    <p className="h-full w-full border-[1px] flex items-center pl-[10px] rounded-[10px] ">
                      {comment.taggedUser.name}
                    </p>
                  </div>
                  <div className="w-[10%]">
                    {comment.creatorId === userId && (
                      <DeleteCommentButton
                        commentId={comment.id}
                        projectId={projectId}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <form
            id="createProjectCommentForm"
            action={createCommentAction}
            className="w-full flex flex-col gap-[10px]"
          >
            <input type="hidden" name="projectId" value={projectId} />
            <div className="flex w-full h-[75px] gap-[20px]">
              <div className="h-full w-[65%] flex flex-col gap-[10px]">
                <span>Comment</span>
                <input
                  type="text"
                  name="title"
                  className="h-full w-full border-[1px] rounded-[10px] pl-[10px] outline-none"
                />
              </div>
              <div className="flex flex-col w-[25%] gap-[10px]">
                <span>Tag</span>
                <select
                  name="taggedUser"
                  className="h-full w-full border-[1px] rounded-[10px] "
                >
                  {users.map((user, index) => {
                    return (
                      <option value={user.id} key={index}>
                        {user.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-[10%] h-full"></div>
            </div>

            {state?.errors?.title && <p>{state.errors.title}</p>}
            <div className="w-full flex gap-[40px]">
              <button
                type="submit"
                form="createProjectCommentForm"
                disabled={isPending}
                className="w-[65%] h-[45px] bg-[#2d2d2d] text-white rounded-[10px]"
              >
                Add Comment
              </button>
              <div className="w-[35%]"></div>
            </div>
          </form>
        </div>
      </div>

      {isPending && <Loading message="Creating comment..." />}
    </div>
  );
}
