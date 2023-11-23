import * as React from 'react';

import { PageHead } from './PageHead';
import styles from './styles.module.css';

export const Page404: React.FC = ({ pageId, error }: any) => {
  const title = 'Notion Page Not Found';

  return (
    <>
      <PageHead title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Notion Page Not Found</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )}

          <img
            src="/404.png"
            alt="404 Not Found"
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  );
};
