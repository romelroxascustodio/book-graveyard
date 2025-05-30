import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex justify-center pb-8">
        <div className="max-w-sm text-center">
          <div className="font-bold text-2xl pb-2">Oath</div>
          <div className="text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here; making it look like readable English. Many desktop publishing packages and web pages editors now use Lorem Ipsum as their default model.</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2xl flex">
          <div className="mr-auto">Ella Mabini</div>
          <div className="ml-auto">Jamie Rebugio</div>
        </div>
      </div>
    </section>
  );
}
