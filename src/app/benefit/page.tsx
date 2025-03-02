import { Button, Text, Box } from '@radix-ui/themes';

import { Footer } from '@/shared/components';

export default function BenefitPage() {
  return (
    <Box width="100%" maxWidth="600px" p="4">
      <Box mb="4">
        <Text as="p" size="4" weight="bold">
          혜택
        </Text>
      </Box>
      <Box>
        <Text as="p" size="6" weight="bold">유학생들을 위해</Text>
        <Text as="p" size="6" weight="bold">
          <Text color="indigo">한국 전화번호 발급 서비스</Text>
          가
        </Text>
        <Text as="p" size="6" weight="bold" mb="4">곧 출시돼요</Text>
        <Text as="p" size="2">혜택 정보 알림에 동의하면 신청이 시작되는 날</Text>
        <Text as="p" size="2" mb="4">가장 먼저 안내 받을 수 있어요</Text>
        <Button size="4" style={{ width: '100%' }} mt="16">
          동의하고 알림받기
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
