import { Flex, Text, Box, Separator, Avatar, Badge } from '@radix-ui/themes';
import { GearIcon, ExitIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { Footer } from '@/shared/components';

export default function MyPage() {
  return (
    <Box width="100%" maxWidth="600px">
      <Box mb="4" p="4">
        <Flex align="center" justify="between">
          <Text as="p" size="4" weight="bold">
            마이페이지
          </Text>
          <GearIcon />
        </Flex>
      </Box>
      <Box px="4" pb="4">
        <Flex align="center">
          <Avatar size="4" src="https://picsum.photos/250/200" fallback="" radius="full" />
          <Flex direction="column" ml="2">
            <Text size="4" weight="bold">왕진호</Text>
            <Text size="1">zino.w@hirediversity.club</Text>
          </Flex>
        </Flex>
      </Box>
      <Separator orientation="horizontal" size="4" style={{ height: '4px' }} color="gray" />
      <Box p="4">
        <Box py="2">
          <Flex align="center">
            <Text size="1" mr="1">내 보유 포인트</Text>
            <Badge radius="medium" mr="1">1,000</Badge>
            <ChevronRightIcon />
          </Flex>
        </Box>
      </Box>
      <Separator orientation="horizontal" size="4" style={{ height: '4px' }} />
      <Box p="4">
        <Flex direction="column">
          <Box py="2">
            <Flex align="center">
              <Text size="2" mr="1">헬프 센터</Text>
              <ChevronRightIcon />
            </Flex>
          </Box>
          <Box py="2">
            <Flex align="center">
              <Text size="2" mr="1">로그아웃</Text>
              <ExitIcon />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box p="4">
        <Footer />
      </Box>
    </Box>
  );
}
