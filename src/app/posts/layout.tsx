import { ReactNode } from "react";
import styles from "./posts.module.css";

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <section className={styles.posts}>
      <aside>
        <h4>Posts</h4>

        <nav>
          <ul>
            <li>
              <a href="/posts/one">One</a>
            </li>
            <li>
              <a href="/posts/two">Two</a>
            </li>
          </ul>
        </nav>
      </aside>

      {children}
    </section>
  );
}
