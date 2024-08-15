import CanvasCard from './CanvasCard';
function LeanCanvas() {
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard title={'1. 문제'} />
        <CanvasCard title={'4. 해결안'} />
        <CanvasCard title={'3. 가치제안'} />
        <CanvasCard title={'5. 경쟁우위'} />
        <CanvasCard title={'2. 목표 고객'} />
        <CanvasCard title={'기존 대안'} isSubtitle />
        <CanvasCard title={'8. 핵심지표'} />
        <CanvasCard title={'상위개념'} isSubtitle />
        <CanvasCard title={'9. 고객 경로'} />
        <CanvasCard title={'얼리 어답터'} isSubtitle />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard title={'7. 비용 구조'} />
        <CanvasCard title={'6. 수익 흐름'} />
      </div>
    </div>
  );
}

export default LeanCanvas;
