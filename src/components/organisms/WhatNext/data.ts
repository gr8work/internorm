import Phone from 'assets/icons/phone.svg';
import Handshake from 'assets/icons/handshake.svg';
import FileOpen from 'assets/icons/file-open.svg';
import Architecture from 'assets/icons/architecture.svg';
import BorderPencil from 'assets/icons/border-pencil.svg';
import Window from 'assets/icons/window.svg';

export const contentIcons = [
  {
    id: 1,
    icon: {
      src: Phone,
      type: '35',
    },
    text: 'Kontakt telefoniczny pracownika Internorm',
  },
  {
    id: 2,
    icon: {
      src: Handshake,
      type: '35',
    },
    text: 'Spotkanie z klientem',
    list: {
      items: [
        {
          id: 1,
          children: '• w salonie',
        },
        {
          id: 2,
          children: '• na budowie',
        },
        {
          id: 3,
          children: '• online',
        },
      ],
    },
  },
  {
    id: 3,
    icon: {
      src: FileOpen,
      type: '35',
    },
    text: 'Przygotowanie oferty',
  },
  {
    id: 4,
    icon: {
      src: Architecture,
      type: '35',
    },
    text: 'Pomiar',
  },
  {
    id: 5,
    icon: {
      src: BorderPencil,
      type: '35',
    },
    text: 'Umowa',
  },
  {
    id: 6,
    icon: {
      src: Window,
      type: '35',
    },
    text: 'Montaż',
  },
];
