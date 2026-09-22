function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Session Log');
    if (!sheet) throw new Error('Session Log tab not found.');
    const p = (e && e.parameter) || {};
    sheet.appendRow([
      new Date(),
      clean_(p.studentName, 40),
      clean_(p.challengeCode, 24),
      clean_(p.vocabularyRange, 80),
      clean_(p.round, 30),
      clean_(p.gameType, 30),
      clean_(p.source, 200)
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

function clean_(value, maximumLength) {
  return String(value || '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maximumLength);
}
