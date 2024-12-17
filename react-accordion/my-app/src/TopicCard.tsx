import { Topic } from './Accordion';

type Props = {
  topic: Topic;
  isOpen: boolean;
  onClick: () => void;
};

export function TopicCard({ topic, isOpen, onClick }: Props) {
  return (
    <div className="topic">
      <div onClick={onClick} className="title">
        <h3>{topic.title}</h3>
      </div>
      {isOpen && <div className="content">{topic.content}</div>}
    </div>
  );
}
