import { useEffect, useState } from 'react';
import HistoryCard, { History } from './HistoryCard';

export default function HistoryPage() {
    const [data, setData] = useState<History[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then(r => r.json())
            .then(setData)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading…</p>;

    return (
        <section className="history-page">
            <h1>SpaceX History</h1>

            <div className="history-page__grid">
                {data.map(item => (
                    <HistoryCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
