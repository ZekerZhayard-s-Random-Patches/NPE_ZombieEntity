
var ASMAPI = Java.type("net.minecraftforge.coremod.api.ASMAPI");
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var InsnNode = Java.type("org.objectweb.asm.tree.InsnNode");
var JumpInsnNode = Java.type("org.objectweb.asm.tree.JumpInsnNode");
var LabelNode = Java.type("org.objectweb.asm.tree.LabelNode");
var VarInsnNode = Java.type("org.objectweb.asm.tree.VarInsnNode");

function initializeCoreMod() {
    return {
        "ZombieEntity_func_230291_eT_": {
            "target": {
                "type": "METHOD",
                "class": "net/minecraft/entity/monster/ZombieEntity",
                "methodName": "func_230291_eT_",
                "methodDesc": "()V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEVIRTUAL && node.owner.equals("net/minecraft/entity/monster/ZombieEntity") && node.name.equals(ASMAPI.mapMethod("func_110148_a")) && node.desc.equals("(Lnet/minecraft/entity/ai/attributes/Attribute;)Lnet/minecraft/entity/ai/attributes/ModifiableAttributeInstance;")) {
                        var ln = new LabelNode();
                        mn.instructions.insert(node, node = new VarInsnNode(Opcodes.ASTORE, 1));
                        mn.instructions.insert(node, node = new VarInsnNode(Opcodes.ALOAD, 1));
                        mn.instructions.insert(node, node = new JumpInsnNode(Opcodes.IFNONNULL, ln));
                        mn.instructions.insert(node, node = new InsnNode(Opcodes.RETURN));
                        mn.instructions.insert(node, node = ln);
                        mn.instructions.insert(node, node = new VarInsnNode(Opcodes.ALOAD, 1));
                    }
                }
                return mn;
            }
        }
    }
}
