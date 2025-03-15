import Image from 'next/image';
import Link from 'next/link';
import { Flex, Button, Text, Box, Callout } from '@radix-ui/themes';

import { Footer } from '@/shared/components';

export default function HomePage() {
  return (
    <Box width="100%" maxWidth="600px" p="4">
      <Box mb="96px">
        <Flex direction="column" align="center" justify="center" gap="8" mb="8">
          <Box width="100%">
            <Callout.Root variant="surface" color="gray">
              <Callout.Text>
                앱 기본 언어를 한국어로 설정했어요! &nbsp;
                <Link href="#" style={{ textDecoration: 'none' }}>
                  <Text size="1" color="indigo">변경하러가기</Text>
                </Link>
              </Callout.Text>
            </Callout.Root>
          </Box>
          <Box width="100%">
            <Flex direction="column" align="center">
              <Image width={250} height={200} src="https://picsum.photos/250/200" alt="main image" />
              <Text weight="bold" size="4" mt="4">한국 생활의 모든 순간, 당신 곁의 파트너</Text>
              <Text mt="4">한국에 머무는 내내 한 순간도 고민하지 마세요</Text>
              <Text><b>HireVisa</b>가 꼭 필요한 서비스만 안내해드릴게요</Text>
            </Flex>
          </Box>
        </Flex>
        <Footer />
      </Box>
      <Box
        position="fixed"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        maxWidth="600px"
        style={{
          background: '#ffffff',
          margin: '0 auto',
        }}
        p="4"
      >
        <Box
          maxWidth="600px"
        >
          <Flex
            direction="column"
            gap="2"
          >
            <Button size="4">
              HireVisa 가입하기
            </Button>
            <Text size="2" color="gray" align="center">
              이미 계정이 있나요?&nbsp;
              <Text size="1" color="indigo">
                로그인
              </Text>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
