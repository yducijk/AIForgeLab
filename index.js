function pathSum(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right && root.val === sum) return true;
  return (
    pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val)
  );
}
