import { Flex, Button, Text, Box, Card } from '@radix-ui/themes';
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Footer } from '@/shared/components';

const QUESTIONS = [
  {
    id: 1,
    text: '외국인등록증은 언제 받을 수 있나요?',
  },
  {
    id: 2,
    text: '외국인등록증 신청 진행상황은 어떻게 확인할 수 있나요?',
  },
  {
    id: 3,
    text: '서류를 잘못 제출했는데 검토중이라 다시 제출할 수 없어요. 어떻게 해야 하나요?',
  },
  {
    id: 4,
    text: '외국인등록증 신청 중에 다른 국가에 가도 되나요?',
  },
  {
    id: 5,
    text: '거주지 서류 준비 중인데, 집주인이 관련 서류를 제공하지 않아요.',
  },
  {
    id: 6,
    text: '자꾸 카드 결제에 문제가 발생해요. 어떻게 해야 하나요?',
  },
]

export default function HelpCenterPage() {
  return (
    <Box width="100%" maxWidth="600px" p="4">
      <Box mb="4">
        <Text as="p" size="4" weight="bold">
          헬프센터
        </Text>
      </Box>
      <Box>
        <Card mb="5">
          <Box>
            <Text as="p" size="4" weight="bold" mb="1" align="center">무엇을 도와드릴까요?</Text>
            <Button size="3" style={{ width: '100%' }}>
              새 문의 등록하기
            </Button>
          </Box>
        </Card>
        <Button variant="outline" size="3" style={{ width: '100%' }} mb="5">
          자주 묻는 질문 보기
        </Button>
        <Box mb="6">
          <Text as="p" size="4" weight="bold" mb="2">👑 TOP 질문</Text>
          <Box>
            {QUESTIONS.map((question) => (
              <Box mb="2" key={question.id}>
                <Flex align="center" justify="between">
                  <Text size="2" mr="3" weight="medium">
                    {`Q. ${question.text}`}
                  </Text>
                  <ChevronRightIcon />
                </Flex>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
