import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useModel } from '@@/plugin-model/useModel';


const Welcome: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const userAccount = initialState?.currentUser?.userAccount;
  return (
    <PageContainer>
      <Card>
        欢迎，{userAccount}！！！
      </Card>
    </PageContainer>
  );
};

export default Welcome;
