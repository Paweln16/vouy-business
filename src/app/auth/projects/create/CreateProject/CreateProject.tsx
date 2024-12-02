"use client";
import { createProject } from "@/app/actions/projects";
import Link from "next/link";
import { useActionState } from "react";
import styles from "./styles.module.scss";
import Loading from "@/components/Loading/Loading";

export default function CreateProject() {
  const initialState = {
    errors: {
      title: [],
      deadline: [],
      details: [],
      status: [],
      netPrice: [],
      tax: [],
      price: [],
    },
    message: undefined,
  };

  const [state, createProjectAction, isPending] = useActionState(
    createProject,
    initialState
  );

  return (
    <div className={styles.projects}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.item}>
            <span style={{ backgroundColor: "#a3a3a3" }}></span>
            <Link href="/auth/projects/create">General info</Link>
          </div>
          <div className={styles.item}>
            <span></span>
            <button
              type="button"
              onClick={() => {
                alert("You must create project first");
              }}
            >
              Comments
            </button>
          </div>
        </div>
      </div>

      <form
        action={createProjectAction}
        id="createProjectForm"
        className={styles.form}
      >
        <div className={styles.formContent}>
          <span className={styles.heading}>General info</span>
          <div className={styles.row}>
            <div className={styles.col}>
              <span>Title</span>
              <input
                type="text"
                name="title"
                required
                className={styles.input}
              />
              {state?.errors?.title && <p>{state.errors.title}</p>}
            </div>
            <div className={styles.col}>
              <span>Deadline</span>
              <input
                type="text"
                name="deadline"
                required
                className={styles.input}
              />
              {state?.errors?.deadline && <p>{state.errors.deadline}</p>}
            </div>
          </div>
          <div className={styles.fullRow}>
            <span>Details</span>
            <input
              type="text"
              name="details"
              required
              className={styles.input}
            />
            {state?.errors?.details && <p>{state.errors.deadline}</p>}
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <span>Status</span>
              <select className={styles.input} name="status">
                <option value="Completed">Completed</option>
                <option value="In progress">In progress</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div className={styles.fullRow}>
            <span>Net price</span>
            <input
              type="text"
              name="netPrice"
              required
              className={styles.input}
            />
            {state?.errors?.netPrice && <p>{state.errors.netPrice}</p>}
          </div>
          <div className={styles.fullRow}>
            <span>Tax</span>
            <input type="text" name="tax" required className={styles.input} />
            {state?.errors?.tax && <p>{state.errors.tax}</p>}
          </div>
          <div className={styles.fullRow}>
            <span>Price</span>
            <input type="text" name="price" required className={styles.input} />
            {state?.errors?.price && <p>{state.errors.price}</p>}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.submit}
              type="submit"
              form="createProjectForm"
            >
              Create Project
            </button>
            <Link href="/auth/projects" className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </div>
      </form>

      {isPending && <Loading message="Creating project..." />}
    </div>
  );
}
