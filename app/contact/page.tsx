import Image from "next/image";

export default function Page() {
    return(
        <div>
            <h1>Contact Us</h1>
            <Image
          src={"/image.jpg"}
          alt="profile pic"
          width={100}
          height={100}
          className="rounded-full border-[2px] border-yellow-500 -ml-2 hover:grayscale transition-all duration-300"
        />
        </div>
    );
}