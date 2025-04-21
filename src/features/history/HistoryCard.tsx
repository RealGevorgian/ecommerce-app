import { Card } from '../../app/shared/ui/Card';

export type History = {
    id: number;
    title: string;
    event_date_utc: string;
    details: string;
    links: { article?: string };
};

export default function HistoryCard({ item }: { item: History }) {
    return (
        <Card className="history-card">
            <h3>{item.title}</h3>
            <time dateTime={item.event_date_utc}>
                {new Date(item.event_date_utc).toLocaleDateString()}
            </time>
            <p>{item.details}</p>
            {item.links.article && (
                <a href={item.links.article} target="_blank" rel="noreferrer">
                    Read more ↗
                </a>
            )}
        </Card>
    );
}
