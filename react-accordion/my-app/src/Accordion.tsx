import { useState } from 'react';
import './Accordion.css';
import { TopicCard } from './TopicCard';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [topicId, setTopicId] = useState<number>();

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topicId === topic.id}
          onClick={() =>
            topicId === topic.id ? setTopicId(undefined) : setTopicId(topic.id)
          }
        />
      ))}
    </div>
  );
}
