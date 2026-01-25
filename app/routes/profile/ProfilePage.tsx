import { Avatar } from "@/components/Avatar";
import { Icon } from "@/components/Icon";
import { PackageRow } from "@/components/PackageRow";

const ProfilePage = () => {
  return (
    <div className="grid grid-cols-[360px_1fr]">
      <aside className="pr-14 border-r-border border-r pl-page py-10">
        <div className="mb-6">
          <Avatar alt="Amy" size={200} />
        </div>
        <h1 className="font-thin text-[40px] mb-2 leading-none">Amy Dutton</h1>
        <p className="font-bold text-base text-java mb-6">@selfteachme</p>

        <button className="button outline mb-4">Follow</button>

        <p className="text-icon mb-6 flex items-center gap-1 text-sm">
          <Icon id="followers" className="text-icon mr-3" size={16} />
          <strong className="text-white">452</strong> followers &bull;{" "}
          <strong className="text-white">6</strong> following
        </p>

        <ul
          className="flex flex-col gap-4 mb-10 text-sm
            [&>li]:flex [&>li]:items-center [&>li]:gap-4
            [&_a]:flex [&_a]:items-center [&_a]:gap-4 [&_a]:hover:underline [&_a]:hover:underline-offset-3"
        >
          <li>
            <a href="#">
              <Icon id="company" className="text-icon" size={16} />
              Ah Ha Creative, LLC
            </a>
          </li>
          <li>
            <Icon id="location" className="text-icon" size={16} />
            Nashville, TN
          </li>
          <li>
            <a href="#">
              <Icon id="link" className="text-icon" size={16} />
              https://selfteach.me
            </a>
          </li>
          <li>
            <a href="#">
              <Icon id="x" className="text-icon" size={16} />
              @selfteachme
            </a>
          </li>
          <li>
            <a href="#">
              <Icon id="youtube" className="text-icon" size={16} />
              c/selfteachme
            </a>
          </li>
          <li>
            <a href="#">
              <Icon id="linkedin" className="text-icon" size={16} />
              in/amy-dutton
            </a>
          </li>
        </ul>

        <h3 className="font-semibold text-base mb-4 tracking-wide">
          Organizations
        </h3>
        <ul
          className="flex flex-col gap-4 mb-10 text-sm
            [&_a]:flex [&_a]:items-center [&_a]:gap-3 [&_a]:hover:underline [&_a]:hover:underline-offset-3"
        >
          <li>
            <a href="#">
              <Avatar alt="Self Teach . me" size={20} />
              Self Teach . me
            </a>
          </li>
          <li>
            <a href="#">
              <Avatar alt="Advent of JS" size={20} />
              Advent of JS
            </a>
          </li>
          <li>
            <a href="#">
              <Avatar alt="Advent of CSS" size={20} />
              Advent of CSS
            </a>
          </li>
          <li>
            <a href="#">
              <Avatar alt="RedwoodJS" size={20} />
              RedwoodJS
            </a>
          </li>
        </ul>
      </aside>

      <main>
        <div className="flex justify-between items-center mt-[72px] pl-8 pr-4 pb-4 border-b border-border">
          <h1 className="font-thin text-4xl">Packages</h1>
          <select>
            <option>Sort</option>
          </select>
        </div>

        <ul className="[&_li]:py-6 [&_li]:pl-8 [&_li]:pr-4 [&_li]:border-b [&_li]:last-of-type:border-b-0 [&_li]:border-border">
          <li>
            <PackageRow link="/packages/oss-this" />
          </li>
        </ul>
      </main>
    </div>
  );
};

export { ProfilePage };
