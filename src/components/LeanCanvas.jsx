import CanvasCard from './CanvasCard';
function LeanCanvas({ canvas, onCanvasChange }) {
  const handleNotesChange = (section, updatedNotes) => {
    const updatedCanvas = {
      ...canvas,
      [section]: { ...canvas[section], notes: updatedNotes },
    };
    onCanvasChange(updatedCanvas);
  };

  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        <CanvasCard
          title={'1. 문제'}
          notes={canvas.problem?.notes}
          onNotesChange={notes => handleNotesChange('problem', notes)}
        />
        <CanvasCard
          title={'4. 해결안'}
          notes={canvas.solution?.notes}
          onNotesChange={notes => handleNotesChange('solution', notes)}
        />
        <CanvasCard
          title={'3. 가치제안'}
          notes={canvas.valueProposition?.notes}
          onNotesChange={notes => handleNotesChange('valueProposition', notes)}
        />
        <CanvasCard
          title={'5. 경쟁우위'}
          notes={canvas.unfairAdvantage?.notes}
          onNotesChange={notes => handleNotesChange('unfairAdvantage', notes)}
        />
        <CanvasCard
          title={'2. 목표 고객'}
          notes={canvas.customerSegments?.notes}
          onNotesChange={notes => handleNotesChange('customerSegments', notes)}
        />
        <CanvasCard
          title={'기존 대안'}
          isSubtitle
          notes={canvas.existingAlternatives?.notes}
          onNotesChange={notes =>
            handleNotesChange('existingAlternatives', notes)
          }
        />
        <CanvasCard
          title={'8. 핵심지표'}
          notes={canvas.keyMetrics?.notes}
          onNotesChange={notes => handleNotesChange('keyMetrics', notes)}
        />
        <CanvasCard
          title={'상위개념'}
          isSubtitle
          notes={canvas.highLevelConcept?.notes}
          onNotesChange={notes => handleNotesChange('highLevelConcept', notes)}
        />
        <CanvasCard
          title={'9. 고객 경로'}
          notes={canvas.channels?.notes}
          onNotesChange={notes => handleNotesChange('channels', notes)}
        />
        <CanvasCard
          title={'얼리 어답터'}
          isSubtitle
          notes={canvas.earlyAdopters?.notes}
          onNotesChange={notes => handleNotesChange('earlyAdopters', notes)}
        />
      </div>
      <div className="grid grid-cols-2">
        <CanvasCard
          title={'7. 비용 구조'}
          notes={canvas.costStructure?.notes}
          onNotesChange={notes => handleNotesChange('costStructure', notes)}
        />
        <CanvasCard
          title={'6. 수익 흐름'}
          notes={canvas.revenueStreams?.notes}
          onNotesChange={notes => handleNotesChange('revenueStreams', notes)}
        />
      </div>
    </div>
  );
}

export default LeanCanvas;
