import { useEffect } from "react";

function useTitle(title: string) {
  console.log(title);
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export default useTitle;
