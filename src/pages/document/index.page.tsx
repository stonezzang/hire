import { Flex, Button, Text, Box, Card, Tabs } from '@radix-ui/themes';
import { Footer } from '@/shared/components';

export default function DocumentPage() {
  return (
    <Box width="100%" maxWidth="600px" p="4">
      <Box mb="4">
        <Text as="p" size="4" weight="bold">
          문서함
        </Text>
      </Box>
      <Box>
        <Tabs.Root defaultValue="inProgress">
          <Tabs.List size="2" style={{ marginRight: '-16px', marginLeft: '-16px' }}>
            <Tabs.Trigger value="inProgress">심사중</Tabs.Trigger>
            <Tabs.Trigger value="complete">검토완료</Tabs.Trigger>
          </Tabs.List>

          <Box pt="4">
            <Tabs.Content value="inProgress">
              <Box>
                <Flex gap="1">
                  <Button size="2" radius="full">전체</Button>
                  <Button variant="outline" size="2" radius="full">제출 필요</Button>
                  <Button variant="outline" size="2" radius="full">심사중</Button>
                </Flex>
                <Box py="4">
                  <Card>
                    <Text as="p" size="2" weight="bold">지금까지 확인된 모든 서류를 제출했어요!</Text>
                    <Text size="1">새로 제출해야 하는 서류가 생기면 알림을 보내 드릴게요</Text>
                  </Card>
                </Box>
              </Box>
            </Tabs.Content>
            <Tabs.Content value="complete">
              <Box>
                <Card>
                  <Text as="p" size="2" weight="bold">아직 서류 검토가 끝나지 않았어요</Text>
                  <Text size="1">조금만 기다려주세요</Text>
                </Card>
              </Box>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Box>
      <Footer />
    </Box>
  );
}
