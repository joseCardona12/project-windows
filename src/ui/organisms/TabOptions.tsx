"use client";
import { useState } from "react";
import {
  IconArrowDownV2,
  IconArrowSort,
  IconCopy,
  IconCut,
  IconDetail,
  IconDoctThree,
  IconFilter,
  IconOption,
  IconPin,
  IconPlus,
  IconRedo,
  IconShared,
  IconTrash,
  IconUndo,
  IconWindowRestore,
} from "../../../public/icons";
import Icon from "../atoms/Icon";
import ContentIconV2 from "../molecules/ContentIconV2";
import ModalSmall from "../molecules/ModalSmall";
import ItemList from "../molecules/ItemList";

export default function TabOptions(): React.ReactNode {
  const [modalDocPoints, setModalDocPoints] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalFilter, setModalFilter] = useState<boolean>(false);
  const [modalSort, setModalSort] = useState<boolean>(false);
  const [modalNew, setModalNew] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between gap-2 bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-1">
      <div className="flex items-center gap-4">
        <ContentIconV2
          icon={<IconPlus />}
          text="New"
          iconFinal={<IconArrowDownV2 />}
          click={() => {
            setModalSort(false);
            setModalFilter(false);
            setModalShow(false);
            setModalDocPoints(false);
            setModalNew(!modalNew);
          }}
        />
        <div className="flex items-center gap-2">
          <Icon icon={<IconCut />} />
          <Icon icon={<IconWindowRestore />} />
          <Icon icon={<IconCopy />} />
          <Icon icon={<IconCut />} />
          <Icon icon={<IconShared />} />
          <Icon icon={<IconTrash />} />
        </div>
        <div className="flex items-center gap-2">
          <ContentIconV2
            icon={<IconArrowSort />}
            text="Sort"
            iconFinal={<IconArrowDownV2 />}
            click={() => {
              setModalDocPoints(false);
              setModalFilter(false);
              setModalShow(false);
              setModalNew(false);
              setModalSort(!modalSort);
            }}
          />
          <ContentIconV2
            icon={<IconPlus />}
            text="Show"
            iconFinal={<IconArrowDownV2 />}
            click={() => {
              setModalDocPoints(false);
              setModalFilter(false);
              setModalSort(false);
              setModalNew(false);
              setModalShow(!modalShow);
            }}
          />
          <ContentIconV2
            icon={<IconFilter />}
            text="Filter"
            iconFinal={<IconArrowDownV2 />}
            click={() => {
              setModalDocPoints(false);
              setModalShow(false);
              setModalSort(false);
              setModalNew(false);
              setModalFilter(!modalFilter);
            }}
          />
        </div>
        <div
          className="flex items-center gap-2 relative"
          onClick={() => {
            setModalShow(false);
            setModalFilter(false);
            setModalSort(false);
            setModalNew(false);
            setModalDocPoints(!modalDocPoints);
          }}
        >
          <Icon icon={<IconDoctThree />} />
          <ModalSmall
            openModal={modalDocPoints}
            setOpenModal={setModalDocPoints}
            position={{ x: 530, y: 150 }}
          >
            <ul className="flex flex-col gap-2">
              <ItemList icon={<IconUndo />} text="Undo" />
              <ItemList icon={<IconRedo />} text="Redo" />
              <ItemList icon={<IconPin />} text="Anchor fast access" />
              <ItemList icon={<></>} text="All select" />
              <ItemList icon={<></>} text="No select any" />
              <ItemList icon={<></>} text="Reverse selection" />
              <ItemList icon={<></>} text="Properties" />
              <ItemList icon={<IconOption />} text="Options" />
            </ul>
          </ModalSmall>
          <ModalSmall
            openModal={modalFilter}
            setOpenModal={setModalFilter}
            position={{ x: 480, y: 150 }}
          >
            Filter
          </ModalSmall>
          <ModalSmall
            openModal={modalShow}
            setOpenModal={setModalShow}
            position={{ x: 370, y: 150 }}
          >
            <ul className="flex flex-col gap-2">
              <ItemList icon={<></>} text="Very big icons" />
              <ItemList icon={<></>} text="Big icons" />
              <ItemList icon={<></>} text="Medium icons" />
              <ItemList icon={<></>} text="Small icons" />
              <ItemList icon={<></>} text="List" />
              <ItemList icon={<></>} text="Details" />
              <ItemList icon={<></>} text="Icons" />
              <ItemList icon={<></>} text="Content" />
              <ItemList icon={<></>} text="Show" />
            </ul>
          </ModalSmall>
          <ModalSmall
            openModal={modalSort}
            setOpenModal={setModalSort}
            position={{ x: 260, y: 150 }}
          >
            <ul className="flex flex-col gap-2">
              <ItemList icon={<></>} text="Name" />
              <ItemList icon={<></>} text="State" />
              <ItemList icon={<></>} text="NModify date" />
              <ItemList icon={<></>} text="More" />
            </ul>
          </ModalSmall>
          <ModalSmall
            openModal={modalNew}
            setOpenModal={setModalNew}
            position={{ x: 20, y: 150 }}
          >
            <ul className="flex flex-col gap-2">
              <ItemList icon={<></>} text="Folder" />
              <ItemList icon={<></>} text="Direct access" />
            </ul>
          </ModalSmall>
        </div>
      </div>
      <div>
        <ContentIconV2 icon={<IconDetail />} text="Details" />
      </div>
    </div>
  );
}
