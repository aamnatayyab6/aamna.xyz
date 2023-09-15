import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    if (!res.ok) {
      const status = res.status;
      const statusText = res.statusText;
      throw new Error(`HTTP error! Status: ${status} - ${statusText}`);
    }

    const data = await res.json();
    const pageInfo = data.pageInfo;

    // console.log('fetching', pageInfo.name);

    return pageInfo;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error fetching page info11111:", err.message || err);
    } else {
      console.error("Error fetching page info2222:", err);
    }
    return null;
  }
};
