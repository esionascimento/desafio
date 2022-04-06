import React, { useState, useEffect } from 'react';
import { List, Avatar, /* Skeleton, */ Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { APIListAllUser } from '../../services';
import { User } from '../../atoms/interface';

import 'antd/dist/antd.css';

function ListUser() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<User[]>([]);

    const loadMoreData = async () => {
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const result = await APIListAllUser();
            result.data.forEach((datas) => {
                setData((prev) => [...prev, datas]);
            });
        } catch (_err) {
            console.log('error');
        }
        setLoading(false);
    };

    useEffect(() => {
        loadMoreData();
    }, []);

    return (
        <div
            id="scrollableDiv"
            style={{
                height: 200,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 1}
                loader=""
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item key={index}>
                            <List.Item.Meta
                                key={index}
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                title={(
                                    <a href="https://ant.design">
                                        {item.first_name}
                                        {' '}
                                        {item.last_name}
                                    </a>
                                )}
                                description={[
                                    <span key={index}>
                                        <div>
                                            ID User:
                                            {item.id_user}
                                        </div>
                                        <div>
                                            ID Client:
                                            {item.id_client}
                                        </div>
                                        <div>
                                            Email:
                                            {item.email}
                                        </div>
                                        <div>
                                            Phone:
                                            {item.phone}
                                        </div>
                                    </span>,
                                ]}
                            />
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
}

export default ListUser;
