import { ReactElement } from 'react';
import { Box, Text, Grid , Separator } from '@radix-ui/themes';

const COMPANY_INFO = [
  '주식회사 하이어다이버시티 | 사업자등록번호: 774-81-01735 | 통신판매신고번호: 2023-서울종로-0101 | 서울 종로구 종로 6, 광화문우체국 6층 서울창조경제혁신센터 스타트업빌리지(서린동, 광화문우체국)',
  '하이어다이버시티 행정사사무소 | 사업자등록번호: 792-39-00792 | 통신판매신고번호: 2023-서울중구-1251 | 서울특별시 중구 삼일대로 363, 지하1층 136호(장교동, 장교빌딩)',
  '대표자명: 심화용',
]

export function Footer(): ReactElement {
  return (
    <footer>
      <Box py="4">
        <Text size="4" color="gray" weight="bold">HireVisa</Text>
        <Separator orientation="horizontal" size="4" my="4"  />
        <Grid columns="2" gap="3" rows="repeat(2, 1fr)" width="auto" mb="4">
          <Text size="1" color="gray">서비스 이용 약관</Text>
          <Text size="1" color="gray" weight="bold">개인정보처리방침</Text>
          <Text size="1" color="gray">환불규정</Text>
          <Text size="1" color="gray">자주 묻는 질문</Text>
        </Grid>
        <Box>
          { COMPANY_INFO.map((text) => (
            <Text key={text} as="p" color="gray" size="1">{text}</Text>
          ))}
          <Text as="p" color="gray" size="1">
            070-4126-5300
          </Text>
          <Text as="p" color="gray" size="1">
            support@hirediversity.freshdesk.com
          </Text>
          <Text as="p" color="gray" size="1">
            ⓒ2023 HireDiversity Inc. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </footer>
  );
}
