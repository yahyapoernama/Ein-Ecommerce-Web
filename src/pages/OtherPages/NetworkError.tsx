import GridShape from "../../components/common/GridShape";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";

export default function networkError() {
  return (
    <>
      <PageMeta
        title="Network Error | Ein Ecommerce"
        description="It seems like our server is currently unreachable. Please try again later or contact our customer support."
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
        <GridShape />
        <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
          <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
            ERROR
          </h1>

          <img src="/images/error/503.svg" alt="503" className="dark:hidden filter brightness-0" />
          <img
            src="/images/error/503-dark.svg"
            alt="503"
            className="hidden dark:block"
          />

          <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            Network error or server unreachable. Please try again.
          </p>

          <Button onClick={() => window.location.reload()} variant="dark">
            Try Again
          </Button>
        </div>
        {/* <!-- Footer --> */}
        <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
          &copy; {new Date().getFullYear()} - Ein Ecommerce
        </p>
      </div>
    </>
  );
}
