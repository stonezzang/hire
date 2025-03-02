import { Button, Text, Box, Card, Badge } from '@radix-ui/themes';

export default function MainPage() {
  return (
    <Box width="100%" maxWidth="600px" p="4">
      <Box mb="4">
        <Text as="p" size="4" weight="bold">
          <Text color="indigo">왕진호</Text>
          님, 환영합니다
        </Text>
      </Box>
      <Card mb="4">
        <Box>
          <Text as="p" size="2" weight="bold" mb="2">외국인 등록증 없어도 가능해요</Text>
          <Button variant="outline" size="3" style={{ width: '100%' }}>
            한국계좌개설 지금 예약하기
          </Button>
        </Box>
      </Card>
      <Card mb="4">
        <Box>
          <Badge radius="medium" mb="1">외국인등록증 신청 진행 중</Badge>
          <Text as="p" size="2" weight="bold" mb="1">아직 제출하지 않은 서류가 있어요</Text>
          <Text as="p" size="1" mb="2">안내에 따라 모든 단계를 완료해주세요</Text>
          <Text as="p" size="1" mb="2">제출마감일: 2025.03.01.</Text>
          <Button variant="outline" size="3" style={{ width: '100%' }}>
            이어서 서류 제출하기
          </Button>
        </Box>
      </Card>
      <Box width="100%">
        <Text as="p" size="2" align="center">접수에 대한 추가 문의사항이 있나요?</Text>
        <Text as="p" size="1" color="indigo" align="center">문의하기</Text>
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
          <Button size="4" style={{ width: '100%' }}>
            결제 진행하기
          </Button>
          <Text as="p" size="1" align="center" color="indigo" mt="1">
            외국인등록증 발급을 위해 결제가 필요합니다
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
