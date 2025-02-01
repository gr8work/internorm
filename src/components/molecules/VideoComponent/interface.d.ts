export interface IVideoComponent {
  id: string;
  intro?: string;
  handleClick: () => void;
  type?: 'vimeo' | 'youtube';
}
