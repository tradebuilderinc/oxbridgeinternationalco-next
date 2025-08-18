import Link from "next/link";
import { useRouter } from "next/router";

function PageItem(props:any) {
  let { pagenum } = props;
  const router = useRouter();
  if(router.query.page == undefined){
    router.query.page = '1';
  }
  return (
    <>
    
      <li
        className={
          router.query.page == pagenum
            ? "page-item active"
            : `page-item num-${pagenum}`
        }
      >
        <Link href={`?page=${pagenum}`}>
          <button disabled={router.query.page == pagenum} className="page-link">
            {pagenum}
          </button>
        </Link>
      </li>
    </>
  );
}

export default PageItem;
