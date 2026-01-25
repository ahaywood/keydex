import { Avatar, AvatarWrapper } from "@/components/Avatar";
import { Badge, BadgeWrapper } from "@/components/Badge";
import { BadgeNumber } from "@/components/BadgeNumber";
import { EmojiReaction } from "@/components/EmojiReaction";
import { Icon } from "@/components/Icon";
import { MetaData } from "@/components/MetaData";
import { Separator } from "@/components/Separator";
import { Toggle } from "@/components/Toggle";
import React from "react";

const Release = () => {
  return (
    <div className="grid grid-cols-[1fr_240px] gap-x-12">
      <div className="border border-white">
        <div className="flex items-center gap-3 p-6 pb-0 mb-6">
          <h2 className="text-2xl font-extralight">v0.2.0-alpha.15</h2>
          <Badge>prerelease</Badge>
        </div>

        {/* contnet */}
        <div className="p-6 pt-0 border-b border-white">
          <h3 className="font-bold mb-4">What’s Changed?</h3>
          <p className="mb-4">
            Nostrud reprehenderit eu quis cupidatat in sit in nisi elit laborum
            excepteur aliquip ullamco consectetur pariatur. Est enim mollit
            minim mollit laboris enim. Occaecat pariatur nisi labore. Est dolore
            nisi proident magna deserunt nulla ut. Aliquip excepteur irure quis
            exercitation deserunt Lorem.
          </p>
          <h3 className="font-bold mb-4">Full Changelog</h3>
          <p>
            Nostrud reprehenderit eu quis cupidatat in sit in nisi elit laborum
            excepteur aliquip ullamco consectetur pariatur. Est enim mollit
            minim mollit laboris enim. Occaecat pariatur nisi labore. Est dolore
            nisi proident magna deserunt nulla ut. Aliquip excepteur irure quis
            exercitation deserunt Lorem.
          </p>
        </div>

        {/* FOOTER */}
        <div className="p-6">
          {/* TODO: Toggle */}
          <Toggle>
            <Icon id="chevron-down" size={16} />
            <h3>Assets</h3>
            <BadgeNumber number={23} />
          </Toggle>

          <EmojiReaction />
        </div>
      </div>
      <div>
        <MetaData label="Assignees">
          <a
            href="#"
            className="flex items-center gap-2 hover:underline underline-offset-3"
          >
            <Avatar alt="Amy" size={24} />
            Amy Dutton
          </a>
        </MetaData>

        <MetaData label="Labels">
          <BadgeWrapper>
            <Badge>bug</Badge>
            <Badge>feature</Badge>
            <Badge>enhancement</Badge>
          </BadgeWrapper>
        </MetaData>

        <MetaData label="Contributors">
          <AvatarWrapper>
            <a href="#">
              <Avatar alt="Amy" size={24} />
            </a>
            <a href="#">
              <Avatar alt="Amy" size={24} />
            </a>
            <a href="#">
              <Avatar alt="Amy" size={24} />
            </a>
          </AvatarWrapper>
        </MetaData>

        <Separator className="my-8" />

        <ul className="text-sm flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline underline-offset-3"
            >
              <Icon id="pencil" size={16} className="text-icon" /> Edit Release
            </a>
          </li>
          <li>
            <button className="text-destructive flex items-center gap-2 hover:underline underline-offset-3">
              <Icon id="trash" size={16} /> Delete Release
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Release };
